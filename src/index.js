import "./style.css";

function loadTeams() {
  fetch("teams.js")
    .then(r => r.json())
    .then(teams => {
      console.warn("teams?", teams);
    });
}
loadTeams();
