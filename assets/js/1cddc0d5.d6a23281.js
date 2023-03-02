"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),p=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,u=s["".concat(m,".").concat(h)]||s[h]||d[h]||r;return n?i.createElement(u,o(o({ref:t},c),{},{components:n})):i.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"Git Basics"},o=void 0,l={permalink:"/blog/2023/02/25/git-basics",editUrl:"https://lipingpan101.github.io/blog/2023-02-25-git-basics.md",source:"@site/blog/2023-02-25-git-basics.md",title:"Git Basics",description:"Here are some commonly used Git commands:",date:"2023-02-25T00:00:00.000Z",formattedDate:"February 25, 2023",tags:[],readingTime:2.41,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Git Basics"},prevItem:{title:"Routing",permalink:"/blog/2023/03/02/router"},nextItem:{title:"TDD Benefits for Beginners",permalink:"/blog/2023/02/23/TDD-benefits"}},m={authorsImageUrls:[]},p=[{value:"Introduction Sequence",id:"introduction-sequence",level:2},{value:"Ramping Up",id:"ramping-up",level:2},{value:"Moving Work Around",id:"moving-work-around",level:2},{value:"A Mixed Bag",id:"a-mixed-bag",level:2},{value:"Advanced Topics",id:"advanced-topics",level:2},{value:"Push &amp; Pull -- Git Remotes",id:"push--pull----git-remotes",level:2},{value:"To Origin And Beyond -- Advanced git Remotes",id:"to-origin-and-beyond----advanced-git-remotes",level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here are some commonly used Git commands:"),(0,a.kt)("h2",{id:"introduction-sequence"},"Introduction Sequence"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git commit"),": records changes to the repository "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git commit --amend"),": modifies the last commit "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git branch newImage"),": creates a new branch named newImage "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout <name>"),": switches to an existing branch "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git checkout -b [yourbranchname]"),": creates a new branch and switches to it "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git merge bugFix"),": merges the bugFix branch into the current branch "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git rebase main"),": applies the changes from the current branch on top of the main branch")),(0,a.kt)("h2",{id:"ramping-up"},"Ramping Up"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"HEAD"),": the symbolic name for the currently checked out commit "),(0,a.kt)("li",{parentName:"ol"},"Detaching ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD"),": attaching it to a commit instead of a branch "),(0,a.kt)("li",{parentName:"ol"},"Moving upwards one commit at a time with ",(0,a.kt)("inlineCode",{parentName:"li"},"^"),". Moving upwards a number of times with ",(0,a.kt)("inlineCode",{parentName:"li"},"~<num>"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"git checkout HEAD~4"),". "),(0,a.kt)("li",{parentName:"ol"},"Reassigning a branch to a commit with the ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")," option, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"git branch -f main HEAD~3"),", moves the ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch to three parents behind ",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD"),". "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git reset"),": moves a branch backwards as if the commit had never been made. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"git revert")," instead to reverse changes and share those reversed changes with others.")),(0,a.kt)("h2",{id:"moving-work-around"},"Moving Work Around"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git cherry-pick <commit1> <commit2> <...>"),": copies a series of commits below your current location (",(0,a.kt)("inlineCode",{parentName:"li"},"HEAD"),")"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git rebase -i"),": opens up a UI to show you which commits are about to be copied below the target of the rebase, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"git rebase -i HEAD~4"))),(0,a.kt)("h2",{id:"a-mixed-bag"},"A Mixed Bag"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git tag v1 C1"),": names the tag ",(0,a.kt)("inlineCode",{parentName:"li"},"v1")," and references the commit ",(0,a.kt)("inlineCode",{parentName:"li"},"C1")," explicitly"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git describe <ref>"),": describes the commit referenced by ",(0,a.kt)("inlineCode",{parentName:"li"},"<ref>")," in the form of ",(0,a.kt)("inlineCode",{parentName:"li"},"<tag>_<numCommits>_g<hash>"))),(0,a.kt)("h2",{id:"advanced-topics"},"Advanced Topics"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"^")," modifier also accepts an optional number after it, which specifies which parent reference to follow from a merge commit.")),(0,a.kt)("h2",{id:"push--pull----git-remotes"},"Push & Pull -- Git Remotes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone"),": creates a copy of a remote repository on your local machine."),(0,a.kt)("li",{parentName:"ol"},"Remote branches are on your local repository, not on the remote repository. "),(0,a.kt)("li",{parentName:"ol"},"Remote branches have a naming convention in the format of ",(0,a.kt)("inlineCode",{parentName:"li"},"<remote name>/<branch name>"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"origin/main"),". "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git fetch"),": downloads changes from the remote repository but does not integrate them into your local repository. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git pull"),": downloads changes from the remote repository and integrates them into your local repository. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git fakeTeamwork <branch> <numCommits>"),": simulates a teammate pushing commits to the ",(0,a.kt)("inlineCode",{parentName:"li"},"<branch>")," branch on the remote. "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git push"),": uploads changes from your local repository to the remote repository.")),(0,a.kt)("h2",{id:"to-origin-and-beyond----advanced-git-remotes"},"To Origin And Beyond -- Advanced git Remotes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git checkout -b branchname origin/branchname"),": creates a new local branch from a remote branch.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git branch -u origin/main foo"),": sets the ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," branch to track ",(0,a.kt)("inlineCode",{parentName:"p"},"origin/main"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git push <remote> <place>"),": pushes the changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"<place>")," to the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"<remote>"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"git push origin <source>:<destination>"),": pushes changes from the ",(0,a.kt)("inlineCode",{parentName:"p"},"<source>")," branch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<destination>")," branch on the origin remote."))))}d.isMDXComponent=!0}}]);