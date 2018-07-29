# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BibleCategory.create(:title => "PotPourri")
BibleCategory.create(:title => "Immense Image")
BibleCategory.create(:title => "Women of the Bible")
BibleCategory.create(:title => "Name that Apostle")

# Clues for 'Potpourri' Category
BibleClue.create(:description => "The brother of Goliath the Gittite.", :answer => "Lahmi", :point_value => 200, :bible_category_id => 1)

# Clues for 'Immense Image' Category
BibleClue.create(:description => "The world power represented by the image's 'head of gold'", :answer => "Babylon", :point_value => 200, :bible_category_id => 2)
BibleClue.create(:description => "A fourth wild beast not corresponding to any actual animal, unusually strong, with large iron teeth, ten horns, and another horn developing with eyes and 'a mouth speaking grandiose things'. Also, represented by the image's legs of iron.", :answer => "Rome", :point_value => 400, :bible_category_id => 2)
BibleClue.create(:description => "The world power depicted by the image's belly and thighs of copper.", :answer => "Greece", :point_value => 600, :bible_category_id => 2)
BibleClue.create(:description => "A second beast, it being like a bear. And on one side it was raised up, and there were three ribs in its mouth between its teeth; and this is what they were saying to it, 'Get up, eat much flesh.'", :answer => "Medo-Persia", :point_value => 800, :bible_category_id => 2)
BibleClue.create(:description => "Name the two world powers that had already passed before Babylon and were not included in Nebuchadnezzar's immense image.", :answer => "Egypt and Assyria", :point_value => 1000, :bible_category_id => 2)

# Clues for 'Women of the Bible' Category
BibleClue.create(:description => "She risked her life to ruin Haman's plan to annihilate her people.", :answer => "Esther", :point_value => 200, :bible_category_id => 3)
BibleClue.create(:description => "Well-known for her 'good deeds and gifts of mercy'. But also who was the first recorded resurrection by an apostle.", :answer => "Dorcas", :point_value => 400, :bible_category_id => 3)
BibleClue.create(:description => "This prostitute hid two spies and misdirected their enemies. Because of her acts of faith and courage, she and her household were spared when the city of Jericho fell to the Israelites.", :answer => "Rahab", :point_value => 600, :bible_category_id => 3)
BibleClue.create(:description => "'Blessed be your good sense! May you be blessed for restraining me this day from incurring bloodguilt.' Also, she was married to who's name means 'Senseless' or 'Stupid'.", :answer => "Abigail", :point_value => 800, :bible_category_id => 3)
BibleClue.create(:description => "A seller of purple. Jehovah opened her heart wide to pay attention to the things being spoken by Paul. Now when she and her household got baptized, she said with entreaty: 'If you men have judged me to be faithful to Jehovah, enter into my house and stay.' And she just made us come. (Acts 16:12-15)", :answer => "Lydia", :point_value => 1000, :bible_category_id => 3)

# Clues for 'Name that Apostle' Category
BibleClue.create(:description => "The two Jesus gave the surname Boanerges, a Semitic term meaning 'Sons of Thunder.'", :answer => "James and John", :point_value => 200, :bible_category_id => 4)
BibleClue.create(:description => "He reacted by trying to put up an armed resistence, and lopped off the ear of Malchus.", :answer => "Peter", :point_value => 400, :bible_category_id => 4)
