
workflow "Build" {
  on = "push"
  resolves = ["Build Angular"]
}

workflow "Deploy on Release" {
  on = "release"
  resolves = ["markuseckstein/github_actions/ftp-deploy@master"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm ci"
}

action "Build Angular" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["GitHub Action for npm"]
  runs = "npm run build.prod"
}

action "markuseckstein/github_actions/ftp-deploy@master" {
  uses = "markuseckstein/github_actions/ftp-deploy@master"
  needs = ["Build Angular"]
  secrets = ["LOCAL_DIR", "REMOTE_DIR", "FTP_SERVER", "FTP_USERNAME", "FTP_PASSWORD"]
}