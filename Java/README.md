Pasta designada a entrega de JAVA + DOCKERFILE





Copy Docker Run: docker run --hostname=bc7eac2331d1 --mac-address=02:42:ac:11:00:02 --env=PATH=/usr/local/tomcat/bin:/opt/java/openjdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=JAVA_HOME=/opt/java/openjdk --env=LANG=en_US.UTF-8 --env=LANGUAGE=en_US:en --env=LC_ALL=en_US.UTF-8 --env=JAVA_VERSION=jdk-21.0.2+13 --env=CATALINA_HOME=/usr/local/tomcat --env=TOMCAT_NATIVE_LIBDIR=/usr/local/tomcat/native-jni-lib --env=LD_LIBRARY_PATH=/usr/local/tomcat/native-jni-lib --env=GPG_KEYS=5C3C5F3E314C866292F359A8F3AD5C94A67F707E A9C5DF4D22E99998D9875A5110C01C5A2F6059E7 --env=TOMCAT_MAJOR=10 --env=TOMCAT_VERSION=10.1.20 --env=TOMCAT_SHA512=6728a28b93c4ef457ed90b8fcaa71a60f9739c4531c59a245879d2075db94c6bac336ea5a28748364df0f81a155d52b0839ecdd0c09adafdea29942a85b265b4 --volume=deploys-tomcat10:/usr/local/tomcat/webapps --workdir=/usr/local/tomcat/webapps -p 8080:8080 --restart=no --label='org.opencontainers.image.ref.name=ubuntu' --label='org.opencontainers.image.version=22.04' --runtime=runc -d dimmoney-app
