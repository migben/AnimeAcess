class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :rating, :description, :like
  has_one :user
end
