<template>
  <div class="animated fadeIn" style="padding-top:2em;">
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <div class="title-header">
          <div class="title">
            Reach Out
          </div>
          <div class="header">
            <li>Contact</li>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8">
        <form class="contact-form">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="First and Last Name">

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email Address">

          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">
.title-header {
  display: inline-block;
  .title,
  .header {
    text-transform: uppercase;
    font-weight: 900;
  }
  .title {
    font-family: 'PT Sans';
    letter-spacing: 0.2em;
    font-size: 1.2em;
    margin-bottom: 20px;
  }
  .header {
    font-family: 'Vollkorn';
    font-size: 5em;
    line-height: 1em;
    margin-bottom: 20px;
  }
  .lead {
    line-height: 1.7em;
    font-size: 1.5em;
    font-family: 'PT Sans';
  }
  .lead,
  .header>li {
    list-style-type: none;
  }
}


.contact-form {
  width: 100%;
  >label {
    text-transform: uppercase;
    color: #6a7989;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}

input[type=text],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  background: transparent;
  color: #ffcc00;
  -webkit-appearance: none;
  &:focus,
  &:active {
    outline: none;
  }
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  width: 100px;
  margin-left: auto;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
