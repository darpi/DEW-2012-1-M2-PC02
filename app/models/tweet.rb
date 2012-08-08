class Tweet < ActiveRecord::Base

Twitter.configure do |config|
      config.consumer_key = 'RGTjP1CmQ9WDRRndHpPw'
      config.consumer_secret = '4R3yMumZGo3O4oc4u8Oj82eKYOTCmetQYdkMEpwFubU'
      config.oauth_token = '252167730-fVwGeN3UxbMdujldcQgfQFi6QEcIWWSG4Tlzl9s'
      config.oauth_token_secret = 'NRd00LLBPYRbXQMZctxhprIw3tnnmmK9GItIGUVhw'
end    

  #def read_text
  def index
    return "sin status" if self.status.blank?    
    Twitter.status(self.status).text
  end

  def read_message
    return "sin user" if self.user.blank?
    Twitter.user_timeline(self.user).first.text
  end

end
