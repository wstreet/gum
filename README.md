# GUM

git user manager cli in git repo

## Installation
```
npm install -g @wstreet7/gum
```
## Usage
```
gum
```

### Add user
```
gum add <username>

🌰:
gum add qwe qwe@gmail.com

output:
 SUCCESS  Add user qwe success, run gum use qwe command to use qwe user.
```
### Remove user
```
gum rm <username>

🌰:
gum rm qwe

output:
 SUCCESS  Remove user qwe success.
```
### List users, global setting and gum config list
```
gum ls

output:
* wstreet7 ------- wstreet7@outlook.com
  streetd -------- streetd@163.com
```
### Set user in git repo
```
gum use <username>

gum use streetd

output:
 SUCCESS  The user has been changed to 'streetd'.
```

## TODO
- [ ] Set global user