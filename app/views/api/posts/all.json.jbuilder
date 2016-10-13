json.array! @posts do |post|
  json.partial! "post", :post => post
end
#
# json.follows @follows do |follow|
#   json.partial! "api/follows/follow", :follow => follow
# end
