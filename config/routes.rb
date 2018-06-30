Rails.application.routes.draw do

  get '/bible_categories' => 'bible_categories#index'

  namespace :api do
    namespace :v1 do
      get '/category' => 'category#index'
    end
  end
end
