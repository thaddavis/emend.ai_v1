# Setup SSL cert with Namecheap

- https://us-east-1.console.aws.amazon.com/acm/home?region=us-east-1#/welcome
- https://www.namecheap.com/support/knowledgebase/article.aspx/9446/2290/generating-csr-on-apache-opensslmodsslnginx-heroku/#3


sudo su
cd /etc/ssl/private
openssl req -new -newkey rsa:2048 -nodes -keyout server.key -out server.csr
cat server.csr

https://www.namecheap.com/support/knowledgebase/article.aspx/794/67/how-do-i-activate-an-ssl-certificate/

## THEN

click Edit Methods > Get Record

## dd

```
cat www_emend_ai.crt > www_emend_ai_chain.crt
echo >> www_emend_ai_chain.crt
cat www_emend_ai.ca-bundle >> www_emend_ai_chain.crt
```

## on ec2 server

```
cd /etc/ssl/private
vi www_emend_ai_chain.crt
# paste in crt chain
/etc/ssl/private/www_emend_ai_chain.crt
```

path to .key
`/etc/ssl/private/server.key`

path to .crt
`/etc/ssl/private/www_emend_ai_chain.crt`