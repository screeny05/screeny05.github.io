---
title:  "Mein oh-my-zsh Theme"
date:   2014-10-19 17:20:12 +0100
categories: tech
tags:
    - Shell
    - ZSH
    - Linux
coverimage: /assets/img/posts/ohmyzsh.jpg
coverfillcolor: 273238
detail_coverimage: false
---

Enhancing your command-line not only makes it look prettier but may also increase your productivity. Read on to learn more about my command-line setup.
{: .article-lead}

Gerade die Hipster-Linux-User unter der OpenSource Community stehen total auf _Command Line Swag_.
Und dafür ist [oh-my-zsh](http://ohmyz.sh/) ganz sicher die richtige Erweiterung zur ZShell (Alternative zu Bash).
Ich habe mir das ganze also mal angesehen und mir ein kleines Theme zusammengeschraubt!

<!-- more -->

_Disclaimer: Ich habe (hatte?) keine Ahnung von Shell Scripting, deswegen lacht nicht gleich los, wenn ihr das hier seht._

Das Theme bietet unterstützung für Git & SVN, daher sollte zumindest das Plugin `svn-fast-info` aktiviert sein. Euer Computer könnte ohne das Plugin explodieren, aber was weiß ich schon.

Außerdem benötigt ihr noch gepatchte Terminal Fonts, in diesem Fall [`awesome-terminal-fonts`](https://github.com/gabrielelana/awesome-terminal-fonts). Damit könnt ihr eure Fonts mit Powerline, Octicons und Font Awesome patchen! Vorgepatchte Fonts für alle faulen gibt es unter dem [`patching-strategy`-branch](https://github.com/gabrielelana/awesome-terminal-fonts/tree/patching-strategy/fonts).

### Screenshots
Jeder liebt gute Screenshots! Ich habe dafür Terminator und Droid Sans Mono unter Ubuntu benutzt.

![screenshot-zsh-theme](https://scn.cx/assets/img/screenshot-zsh-theme.png)

_Git, SVN, Returncodes und Root_

### Code

>I can haz the codez?

{% highlight bash %}
build_psr_prefix(){
  echo "%{$fg[green]%}%{$bg[black]%}${1}%{$fg[cyan]%}%{$fg[black]%}%{$bg[cyan]%}"
}
build_svn(){
  local revision="$(svn_current_revision)"
  local build_svn_status="$(build_psr_prefix 'svn')"
  if [ ! -z "$revision" ]; then
    local status_mod="$(svn_status_info)"
    if [ "${#${status_mod}}" -gt 1 ]; then status_mod="${status_mod:1}"; fi
    build_svn_status="${build_svn_status}${revision}${status_mod}"
    echo "$build_svn_status %{$reset_color%}"
  fi
}

local return_code="%(?..%{$fg[red]%}%? %{$reset_color%})"

ZSH_THEME_GIT_PROMPT_PREFIX="$(build_psr_prefix 'git')"
ZSH_THEME_GIT_PROMPT_SUFFIX=" %{$reset_color%}"
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_GIT_PROMPT_CLEAN=""

ZSH_THEME_SVN_PROMPT_CLEAN=""
ZSH_THEME_SVN_PROMPT_ADDITIONS="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_SVN_PROMPT_DELETIONS="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_SVN_PROMPT_MODIFICATIONS="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_SVN_PROMPT_REPLACEMENTS="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_SVN_PROMPT_UNTRACKED="%{$fg[red]%}%{$fg[green]%}"
ZSH_THEME_SVN_PROMPT_DIRTY="%{$fg[red]%}%{$fg[green]%}"


PROMPT='%{$bg[black]%}%{$fg[cyan]%}%~% %{$fg[black]%}%{$bg[white]%}%{$fg[red]%}%(!.♯.»)%{$reset_color%}%{$fg[white]%}%{$reset_color%}'
RPS1='${return_code} $(git_prompt_info)$(build_svn)'
{% endhighlight %}

_Speichern unter `~/.oh-my-zsh/themes/screeny-awesome.zsh-theme` oder so etwas._


**Lizenz:** WTFPL
