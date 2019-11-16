# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false, unique: true|
|name|string|null: false, unique: true, index: true|
|passwoord|string|null: false, unique: true|
### Assosiation
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
### Assoiation
- has_many :users, through: :uses_groups
- has_many :messages
- has_many :users_groups

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Assosiation
- belongs_to :user
- belongs_to :group

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user