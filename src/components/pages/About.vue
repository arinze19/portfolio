<template>
  <main>
    <p>So, you want to know more about this arinze fellow, huh(me too)</p>

    <div class="gif">
      <img src="https://cutt.ly/3kix5rl" />
      <p>Me when my code finally works</p>
    </div>

    <h2>Who?</h2>
    <p>
      So, who is this guy, you may be wondering . well to put it simply, I am a
      web developer obsessed with making pixel perfect interfaces for web users.
      <br />
      I write my code majorly in JavaScript and use React and Vue extensively for creating
      complex frontend application logic.
      <br />
      I write API's occasionally and my REST API's are written in NodeJs(Express). I also
      use MongoDB and Firebase as my databases. I also develop my software with a test driven development approach
    </p>
    <p>
      When I'm not deep in thought thinking about why my code doesn't work the
      way i want it to(they work eventually at the end of the day or week...or
      month. and the satisfaction that comes when they finally work is really
      unrivaled) i usually read about start-ups
      <a href="https://stearsng.com">here 📈</a> and watch movies
      <a href="https://netflix.com">here 🎬</a>, and a huge fan of coldplay, even
      made a project on them <a href="https://arinze19.github.io/colddrumkit.html">here</a>. I contribute and give back to community using
      <a href="https://kwanda.co" target="_blank">Kwanda</a>.
      <br />
      I'm really passionate about building products that positively affect lives
      using software and stay up to date with the latest technology
    </p>
    <p>
      If you have a question or want to collaborate on making products that affect millions of
      people positively?
      <a href="mailto:arinze19@outlook.com">Say Hi here 🐾</a>
    </p>
  </main>
</template>

<style scoped>
main {
  padding-top: 100px;
  padding-bottom: 100px;
  width: 50%;
  margin: 0 auto;
  max-width: 900px;
  line-height: 1.5;
}

.gif {
  width: 100%;
  height: 250px;
  margin-top: 30px;
  margin-bottom: 60px;
}

.gif p {
  text-align: center;
  font-size: 14px;
}

img {
  height: 100%;
  width: 100%;
}

p {
  padding-bottom: 10px;
  font-size: 25px;
}

h2 {
  font-size: 45px;
}

@media (max-width: 768px) {
  p {
    font-size: 16px;
  }

  main {
    width: 80%;
  }
}
</style>