echo "Creating mongo users..."
mongo < /docker-entrypoint-initdb.d/init_mongodb.js
echo "Mongo users created."