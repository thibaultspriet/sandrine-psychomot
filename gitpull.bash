#!/bin/bash

echo message : 
read input

echo branch : 
read branch

git add -A
git commit -m "$input"
git push origin $branch

