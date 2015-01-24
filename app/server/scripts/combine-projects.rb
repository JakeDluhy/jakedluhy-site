require 'json'

directory_root = '../blog/posts'
post_directory = []

Dir.foreach(directory_root) do |post|
  next if post == '.' or post == '..'
  post_file = File.read("#{directory_root}/#{post}")
  post_hash = JSON.parse(post_file)
  snippet_hash = {
    "id" => post_hash["id"],
  	"title" => post_hash["title"],
  	"date" => post_hash["date"],
  	"snippet" => post_hash["snippet"],
  	"thumbURL" => post_hash["thumbURL"]
  }
  post_directory.push(snippet_hash)
end

File.open("../blog/posts.json","w") do |f|
  f.write(JSON.pretty_generate(post_directory))
end