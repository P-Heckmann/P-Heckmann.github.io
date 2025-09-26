function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

document.getElementById("nav-placeholder").innerHTML = `
<nav>
<a href="../index.html"> <p>Paul Heckmann</p></a>
<div>
<ul>
  <div class="dropdown">
    <button class="dropbtn">
      About me
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/pages/research.html">Research publications</a>
      <a href="/pages/education.html">Education</a>
      <a href="/pages/skills.html">Skills</a>
      <a href="/pages/interests.html">Interests</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">
      Data Science Projects
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="/pages/weather.html">Weather</a>
      <a href="/pages/music.html">Music</a>
      <a href="/pages/sports.html">Sports</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">
      Web Apps
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#link1">Urban eyes</a>
      <a href="#link2">Geolidays</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">
      Geosciences
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#link1">Thermodynamic modelling</a>
      <a href="#link2">Geolithochemistry</a>
    </div>
  </div>
</div>
  <!--  -------------------------- Side Nav -------------------------- -->
  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
      >&times;</a
    >
    <a href="index.html">Home</a>
    <h2>About me</h2>
    <a href="/pages/research.html">Research</a>
    <a href="/pages/education.html">Education</a>
    <a href="/pages/skills.html">Skills</a>
    <a href="/pages/interests.html">Interests</a>
    <h2>Data Science Projects</h2>
    <a href="/pages/weather.html">Weather</a>
    <a href="/pages/music.html">Music</a>
    <a href="/pages/sports.html">Sports</a>
    <h2>Web Apps</h2>
    <a href="#">Urban eyes</a>
    <a href="#">Geolidays</a>
    <h2>Geosciences</h2>
    <a href="#">Thermodynamic modelling</a>
    <a href="#">Geolithochemistry</a>
  </div>
  <span
    class="sidenav-button"
    style="font-size: 30px; cursor: pointer"
    onclick="openNav()"
    >&#9776;</span
  >
</ul>
</nav>
`;

document.getElementById("footer").innerHTML = `<footer class="footer">
<p class="footer__copyright">
  &copy; Copyright by Paul Heckmann
  <script>
    document.write(new Date().getFullYear());
  </script>
</p>
</footer>`;
