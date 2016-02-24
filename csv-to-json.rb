require 'csv'
require 'json'

candidates = []
CSV.foreach("data.csv", { headers: true }) do |row|
  candidates.push row.to_hash
end

issues = candidates[0].keys
remove = ["name", "party", "image", "imagehov"]
remove.map {|i| issues.delete i}
data = {candidates: candidates, issues: issues}

File.open("src/data/data.js", 'w') do |f|
  f.write "let data = #{data.to_json}\n\nexport default data"
end
