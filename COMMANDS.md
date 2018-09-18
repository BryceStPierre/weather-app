`heroku login`

`heroku create weather-app-test`

`heroku addons:create heroku-postgresql:hobby-dev --name=weather-app-test-db`

`heroku addons:attach weather-app-test-db --app=weather-app-test`

`git push heroku master`

`heroku ps:scale web=1`

`heroku open`

`heroku logs --tail`

`heroku pg:psql --app weather-app-test`