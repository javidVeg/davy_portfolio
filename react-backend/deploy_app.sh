#!/bin/bash

set -e

PROJECT_ID="portfolio-backend-433613"
JAR_FILE="target/react-backend-0.0.1-SNAPSHOT.jar"
SERVICE_NAME="default"
REGION="us-central"
YAML_FILE="app.yaml"

# Ensures we are set to the correct project
echo "Setting GCP project to $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Builds our app and creates the JAR file
echo "Building the Spring Boot application..."
mvn clean package

# Checks if our JAR file exists
if [ ! -f "$JAR_FILE" ]; then
    echo "Error: $JAR_FILE not found. Ensure the build was successful."
    exit 1
fi

# Deploys our application to GCP
echo "Deploying the application to Google App Engine..."
gcloud app deploy "$JAR_FILE" --quiet

# Checks deployment status
if [ $? -eq 0 ]; then
    echo "
 (                                                                                         ____ 
 )\ )            (                              )                            (         (  |   / 
(()/(    (       )\    (       )     (       ( /(        (           (       )\ )   (  )\ |  /  
 /(_))  ))\`  ) ((_)(  )\ )   (     ))\ (    )\())  (   ))\  (  (   ))\(  ( (()/(  ))\((_)| /   
(_))_  /((_/(/(  _  )\(()/(   )\  '/((_))\ )(_))/   )\ /((_) )\ )\ /((_)\ )\ /(_))/((_)_  |/    
 |   \(_))((_)_\| |((_))(_))_((_))(_)) _(_/(| |_   ((_(_))( ((_((_(_))((_((_(_) _(_))(| |(      
 | |) / -_| '_ \| / _ | || | '  \(/ -_| ' \)|  _|  (_-| || / _/ _|/ -_(_-(_-<|  _| || | |)\     
 |___/\___| .__/|_\___/\_, |_|_|_|\___|_||_| \__|  /__/\_,_\__\__|\___/__/__/|_|  \_,_|_((_)    
          |_|          |__/                                                                     
"
    echo "Application is live at https://$SERVICE_NAME.$REGION.r.appspot.com/"
else
    echo "Deployment failed. Check the logs for details."
    exit 1
fi

# Tails our logs to monitor the deployment
echo "Tailing the logs..."
gcloud app logs tail -s $SERVICE_NAME