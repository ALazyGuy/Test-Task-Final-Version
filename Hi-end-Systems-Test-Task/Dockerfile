FROM maven:3-amazoncorretto-21 AS MAVEN_BUILD

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package -DskipTests

FROM amazoncorretto:21
WORKDIR /app
VOLUME /tmp

COPY --from=MAVEN_BUILD /build/target/*.jar /app/application.jar
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "application.jar"]
