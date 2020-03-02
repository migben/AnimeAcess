class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :rating, :genre
  has_one :user
end
