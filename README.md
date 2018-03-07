Testing [Cote](https://github.com/dashersw/cote) Microservice Framework
======

First
```bash
npm i
```

Shell #1

```bash
node cote-client.js
```

Shell #2

```bash
node cote-service.js
```

On my local machine, it takes only 28s to complete 1,000,000
requests (2 services, 1 client)! That's 34,919rps without any message loses! Plus it's
zero-config, Amazing!
