`heroku login`

`heroku create weather-app-bryce`

`heroku addons:create heroku-postgresql:hobby-dev --name=weather-test-db`

`heroku addons:attach weather-test-db --app=weather-app-bryce`

`heroku pg:psql --app weather-app-bryce`

`\q`

`git push heroku master`

`heroku ps:scale web=1`

`heroku open`

`heroku logs --tail`