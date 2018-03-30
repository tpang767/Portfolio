<template>
  <div ref="list" class="list">
    <transition-group class="flip-list" name="flip-list" ref="tg1" tag="div">
      <div v-for="(item,index) in value" :key="item.id" class="item">
        <slot name="item" :class="{active:item.isOpen}" :item="item" :index="index">
          <v-expansion-panel id="exp1">
            <v-expansion-panel-content>
              <div slot="header" class="drop-target handle2">
                <div class="handle" @mouseDown="mouseDown" @mouseUp="mouseUp" @click="click"></div>
                <span>{{item.title}}</span>
              </div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <div slot="item">{{item.text}}</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </slot>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'ExpansionPanel',
  props: {
    value: { type: Array }
  },
  mounted: function() {
    console.log("mounted");
  },
  updated: function() {
    console.log("updated");
    //debugger;
    this.childrenElts = Array.from(this.$refs.tg1.$el.children);
    if (this.draggingElt) {
      var newIndex = this.value.indexOf(this.draggingItem)
      this.draggingElt = this.childrenElts[newIndex];
      if (this.draggingElt) {
        this.draggingElt.classList.add("dragging")
      }
    }
  }, //
  methods: {

    mouseDown: function(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("mouseDown");

      var target = e.target;
      while (target && !target.classList.contains("item")) {
        target = target.parentElement;
      }
      if (target == null) return;
      this.childrenElts = Array.from(target.parentElement.children);
      this.parentElement = target.parentElement;
      this.list = this.parentElement.parentElement;
      this.parentElement.classList.add("dragging");
      this.list.classList.add("dragging");
      var index = this.childrenElts.indexOf(target);
      this.draggingElt = target;
      //this.draggingIndex = index;
      this.draggingItem = this.value[index];
      console.log("index", index);

      target.classList.add("dragging");
      document.addEventListener("mouseup", this.mouseupListener, true);
      document.addEventListener("mousemove", this.mousemoveListener, true);
    },

    mouseupListener: function(e) {
      console.log("mouseUp", e.target);
      if (this.draggingElt) {
        this.draggingElt.classList.remove("dragging");
      }
      document.removeEventListener("mouseup", this.mouseupListener, true);
      document.removeEventListener("mousemove", this.mousemoveListener, true);

      if (this.draggingElt) {
        this.draggingElt.style.backgroundColor = null;
      }
      this.parentElement.classList.remove("dragging");
      this.list.classList.remove("dragging");

      e.preventDefault();
    },

    mouseUp: function(e) {
      e.preventDefault();
      e.stopPropagation();
    },

    click: function(e) {
      e.preventDefault();
      e.stopPropagation();
    },

    mousemoveListener: function(e) {
      var target = e.target;
      //console.log("moving") xxx
      var dropTargetFound = false;
      while (target != null) { //x
        if (target.classList.contains('drop-target')) dropTargetFound = true;
        if (target.classList.contains('item') && dropTargetFound) {
          if (target == this.dropTarget || target == this.draggingElt) return;
          var index = this.childrenElts.indexOf(target);
          if (index >= 0) {
            if (target.classList.contains("flip-list-move")) return;
            if (this.value[index] == this.draggingItem) return;
            var draggingIndex = this.childrenElts.indexOf(this.draggingElt);

            this.dropTarget = target;
            target.classList.add("dropping");
            console.log("swapped", draggingIndex, "to", index);

            if (draggingIndex >= 0) {
              var removedItems = this.value.splice(draggingIndex, 1);
              this.value.splice(index, 0, removedItems[0]);
              //this.draggingIndex = index;  // x
              //this.draggingElt = null;
              this.dropTarget.classList.remove("dropping");
              this.dropTarget = null; //
            }
            return;
          }
        }
        target = target.parentElement;
      }
    }
  }
}

</script>
<style>
.flip-list .handle::after {
  cursor: move;
  content: "≡";
  padding-left: 7px;
  position: absolute;
  left: 0px;
}

ul.flip-list {
  margin: 0;
  padding: 0;
  background-color: red;
  list-style-type: none;
}

.list>ul>li::before {
  cursor: move;
  content: "≡";
  padding-left: 0px;
  position: absolute;
  left: 0px;
}

ul.flip-list>li {
  margin-left: 40px;
}

.flip-list.dragging {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12)!important;
}

.flip-list.dragging>.item:not(.dragging) .handle::after {
  content: ">";
}

.flip-list.dragging .dragging {
  content: "≡";
}

.flip-list-move {
  transition: transform 0.5s;
}

div.list {
  padding: 0;
}
</style>