#!/bin/bash
# Install OpenJDK
apt-get update && apt-get install -y openjdk-17-jdk

# Compile and run
javac EnvirofriendlyApplication.java
java EnvirofriendlyApplication