workflow "Build, lint and test" {
  on = "push"
  resolves = [
    "Build (prod)",
    "Install node_modules",
  ]
}

action "Install node_modules" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "Build (prod)" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install node_modules"]
  runs = "npm run build.prod"
}
