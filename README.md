# react-any

#HOCやライフサイクル、、jsの部分など、しっかりと流用できるレベルでコンポーネントを作成する

#あとは、コンポーネントの重なり、とあとは全体的な書く設計と、、そのあとのコンポーネント依存関係とかを勉強する。

#あとはオーダーの、ページ遷移やCSSとかアニメーション。。という、それでなにか作ってもよいな。

#Hooks useStateとpropsをうまく使って管理する！！propsを使用するイメージをもつ -> 単方向というイメージで

HOCを使用して同一の機能をまとめて再利用してやるのはちょっとハードル高い。。
そしてHooksのみで記述するのもライフサイクル完璧じゃないので、ちょっと難しい、、割と長めにライフサイクルするときはクラスで書いて、イメージが
つきやすいものは関数で書く、みたいに使い分けるぐらいしか今はなさそうかな。。
あとはやっぱpropsの部分だったり、最初の設計の流れというか組み立てHTMLの部分でクラスでやっていくほうが慣れているから、、処理はHooks使えるところ使って、骨組みはクラスで、、みたいな、、スラスラ書けるほうをチョイス、、これはTypescriptにも言える。

あと、API部分意外の実装がイメージできたのが大きい。。それをダミーかなにかでやっといてイメージ膨らませることが可能になった。

#一番の問題は
データの持ち回りをどうするかだよな、、バケツリレーにするのか、、hooksで使いやすくなったcontext API = useContextを使用するのか。。。
Fluxになるのか。。。

バケツになりそうなパーツ部分だけをuseContextとかで書いて、、みたいな感じでできればなぁ。
でも実際、ユーザー情報やアカウント情報をそれでやるのはハードルがありそう。。UIライブラリとかパーツ限定で持ち回る限定的なのならいける気がするが
