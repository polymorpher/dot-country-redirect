#!/bin/sh
sudo cp redirect-server.service /etc/systemd/system/redirect-server.service
sudo systemctl enable redirect-server
sudo systemctl start redirect-server
systemctl status redirect-server
