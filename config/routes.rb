Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update] do
      member do
        post 'follow', to: 'users#follow'
        delete 'follow', to: 'users#unfollow'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :show, :update, :destroy] do
      member do
        post 'like', to: 'posts#like'
        delete 'like', to: 'posts#dislike'
      end
    end
  end

  get "*path", to: "static_pages#root"
  root "static_pages#root"
end
