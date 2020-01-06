# tiny-docker-app
A tiny node app as a sample for dockerization.
The application is a simple express app that returns some basic process stats.
The intent of this sample is to explain the use of docker and Dockerfiles with nodejs
applications.

To run the example server inside a docker container, use the
following commands - 

````
# Build the container image. The `.` at the end is needed to specify the current directory as source
docker image build -t tiny-app:latest .

# Run the iamge in a new container called tiny-app with custom env and port as well as foward requests on the host machine's
# port 7001 to the container's port 7389
docker run -p 7001:7389 -e PORT=7389 -e CUSTOM_VAR1=hello -e CUSTOM_VAR2=world --name tiny-app tiny-app:latest
````
