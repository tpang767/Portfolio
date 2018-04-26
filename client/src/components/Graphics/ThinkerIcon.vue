<template>
  <svg class="thinker"
       width="200"
       height="200"
       viewBox="0 0 64 64"
       aria-labelledby="thinker"
       role="presentation"
       preserveAspectRatio="none">

      <g ref="head" id="headshape">
	<path style="fill:none;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;" d="M63,64V45V33V22.5
		C63,10.626,53.374,1,41.5,1h0C29.626,1,20,10.626,20,22.5V36h5v13h15v15" />
    <!-- :class="{draw: loading}" -->
   		<line style="fill:none;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;" x1="40" y1="63" x2="32" y2="63"/>

		<line style="fill:none;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;" x1="38" y1="49" x2="44" y2="49"/>
            <circle id="circle"
                ref="circle"
                style="stroke-width:2;stroke-linejoin:round; stroke-dasharray:2.0101,2.0101;"

                :class="{spin: loading}"
                cx="42.379"
                cy="20"
                r="16" />
  </g>

      <g id="lightbulb" ref="lightbulb">
        <path style="fill:yellow;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"

              d="M50,15
		c0-4.722-4.091-8.488-8.922-7.948c-3.615,0.404-6.574,3.329-7.017,6.94c-0.267,2.178,0.345,4.208,1.526,5.787
		C36.453,20.936,37,22.299,37,23.744V24c0,2.761,2.239,5,5,5h0c2.761,0,5-2.239,5-5v-0.26c0-1.43,0.525-2.788,1.387-3.928
		C49.399,18.473,50,16.808,50,15z" />
        <rect x="39"
              y="29"
              style="fill:none;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"

              width="6"
              height="4" />
        <g id="lightbulb-inner"
           ref="lightbulb-inner">
          <polygon style="fill:none;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"

                   points="40,20 40,14 42,15
		44,14 44,20 	" />

          <line style="fill:none;stroke:#443027;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;"

                x1="42"
                y1="29"
                x2="42"
                y2="20" />
        </g>
      </g>
    </svg>
</template>

<script>
export default {
  name: 'BrandIcon',
  data () {
    return {
      loading: true
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
#headshape{
  stroke: black;
}
.spin {
  fill:orange;
  stroke: black;
   animation: spinner 5s linear forwards infinite;
}
@keyframes spinner {
  from {
    stroke-dashoffset: 0;
  }
  to {
    // stroke-dashoffset: 0;
    // stroke-dasharray: 0;
    stroke-dashoffset: 36;
  }
}
//
.draw {
    stroke-dasharray: 560;
   stroke-dashoffset:560;
  animation: logoStroke 5s linear forwards infinite
    // logoStrokeFill 0.75s cubic-bezier(0.445, 0.050, 0.550, 0.950) 2s forwards;
}

@keyframes logoStroke {
  to {
    stroke-dashoffset: 0;
  }
}

</style>
