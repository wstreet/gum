# UMG

git user manager cli in git repo

## Installation
```
npm install -g umg
```
## Usage
```
umg
```

### Add user
```
umg add <username>

🌰:
umg add qwe qwe@gmail.com

output:
 SUCCESS  Add user qwe success, run umg use qwe command to use qwe user.
```
### Remove user
```
umg rm <username>

🌰:
umg rm qwe

output:
 SUCCESS  Remove user qwe success.
```
### List users, global setting and umg config list
```
umg ls

output:
* wstreet7 ------- wstreet7@outlook.com
  streetd -------- streetd@163.com
```
### Set user in git repo
```
umg use <username>

umg use streetd

output:
 SUCCESS  The user has been changed to 'streetd'.
```

## TODO
- [ ] Set global user