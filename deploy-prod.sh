svn update
node --max_old_space_size=2048 node_modules/@angular/cli/bin/ng build --prod --base-href /cockpit --deploy-url /cockpit/ --configuration=test --build-optimizer=false --sourcemaps=false
eb deploy