class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorite
  has_many :animes
end
