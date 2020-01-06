# tiny-docker-app
A tiny node app as a sample for dockerization.
The application is a simple express app that returns some basic process stats.
The intent of this sample is to explain the use of docker and Dockerfiles with nodejs
applications.

To run the example server inside a docker container, use the
following commands - 

````
# Build the container image
docker image build -t tiny-app:latest .
docker run -p 7389:7389 -e PORT=7389 -e CUSTOM_VAR1=hello -e CUSTOM_VAR2=world --name tiny-app tiny-app:latest
````
