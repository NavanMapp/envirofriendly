# Use OpenJDK as base image
FROM eclipse-temurin:17-jdk-jammy
# Copy the built JAR into the container
COPY target/EnvirofriendlyApplication.jar EnvirofriendlyApplication.jar
# Run the JAR
ENTRYPOINT ["java", "-jar", "EnvirofriendlyApplication.jar"]