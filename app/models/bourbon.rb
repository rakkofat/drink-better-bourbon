class Bourbon < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :proof, presence: true
end