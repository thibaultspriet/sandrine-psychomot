#!/bin/bash

echo message : 
read input

echo branch : 
read branch

git add -A
git commit -m "$input"
git push origin $branch

expect "Enter passphrase for key '/Users/sprietthibault/.ssh/id_rsa':"
send "qbqtqx0749\r"

