CONF=config.json

if [ -f "$CONF" ]; then
    ln -s $CONF src/res/$CONF
    yarn upgrade
    docker stop hawking
    docker rm hawking
    docker build -t nchubb/hawking .
    docker run --restart unless-stopped --name hawking -p 3001:8080 -v db:/usr/src/app/data -d nchubb/science-bot
else
    echo "ERROR: No $CONF file found => Edit config.json.sample and rename to config.json."
fi

