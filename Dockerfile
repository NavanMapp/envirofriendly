# Use OpenJDK as base image
FROM eclipse-temurin:17-jdk-jammy
# Copy the built JAR into the container
COPY target/EnvirofriendlyApplication.java EnvirofriendlyApplication.java
# Run the JAR
ENTRYPOINT ["java", "-jar", "EnvirofriendlyApplication.java"]