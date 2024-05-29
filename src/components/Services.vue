
<template>
  <div class="settings-pages">
    <div class="header-setting-pages">
      <p class="account">Account Settings</p>
      <div class="save-changes">
        SAVE CHANGES
        <img src="../assets/icons/savechanges.svg"/>
      </div>
    </div>
    
    <div class="content-setting-pages">
      <div class="input-container">
        <p class="input-name"> Nickname (Visible to others. No spaces or special symbols)</p>
        <input type="text" placeholder="CharacterProvider" />
      </div>
      <div class="input-container">
        <p class="input-name">Password recovery Email</p>
        <input type="text" placeholder="cococo@coc.li" />
      </div>

      <div class="checkbox-container">
        <input class="checkbox" type="checkbox" />
        <p>Make My Favorites Public</p>
      </div>
      <div class="checkbox-container">
        <input class="checkbox" type="checkbox" />
        <p>Make My Page Public</p>
      </div>

      <div class="input-container">
        <p class="input-name">Banned Tags</p>
        <input type="text" placeholder="Add tags to ban..." />
        <div class="tags-container">
          <div class="tag-small">
            Handholding
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            Frienship
            <img src="../assets/icons/deleate.svg"/>
          </div>
        </div>
      </div>
      <div class="input-container">
        <p class="input-name">Banned Users</p>
        <input type="text" placeholder="Add users to ban..." />
        <div class="tags-container">
          <div class="tag-small">
            Kapustnik
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            VekAtlanta
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            Mage
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            Bearcage
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            CharacterReceiver
            <img src="../assets/icons/deleate.svg"/>
          </div>
          <div class="tag-small">
            Shacky
            <img src="../assets/icons/deleate.svg"/>
          </div>
        </div>
      </div>

      <div class="download-container">
        DOWNLOAD ALL MY CREATIONS.ZIP
        <img src="../assets/icons/download.svg"/>
      </div>
    </div>

    <div class="account-container">
      <div class="account-management">
        <p class="input-name">Account Management</p>
        <img src="../assets/icons/arrow.svg"/>
      </div>
      <p class="delete-account">Permanently Delete My Account</p>
    </div>
  </div>

  <div v-if="show" class="modal">
    <div class="modal-container">
      <div data-close class="modal-close" @click="closeModal()">&times;</div>
      <div class="input-name">
        Are you sure? <br>
        Your account will be deleted!
      </div>
      <div class="password-input">
        <p class="input-name">Password</p>
        <input class="password-input" type="password"/>
      </div>

      <div class="checkbox-container">
        <input class="checkbox" type="checkbox">
        <p>Delete all projects</p>
      </div>

      <div class="cancel">CANCEL</div>
      <div class="delete-account-modal">Delete account permanently</div>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        show: true,
      }
    },
    methods: {
      closeModal: function() {
        this.show = false;
      }
    }
  }

</script>


<style scoped>
.settings-pages {
  z-index: 0;
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 123px;
  width: 556px;
  text-align: center;
  margin: 0 auto;
}

.header-setting-pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 586px;
}

.account {
  font-size: 32px;
  font-weight: bold;
}

.save-changes {
  width: 155px;
  height: 33px;
  border-radius: 2px;
  background: rgba(174, 198, 255, 1);
  padding: 8px 12px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgba(24, 24, 26, 1);
  font-weight: bold;
  font-size: 16px;
}

img {
  margin-left: 4px;
  width: 16px;
  height: 15px;
}

.content-setting-pages {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 556px;
  
  background: rgba(18, 18, 18, 1);
  margin-bottom: 24px;
  padding: 24px 16px;
}

.input-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
}

input {
  border: 1px rgba(83, 83, 92, 1);
  border-radius: 2px;
  background: rgba(29, 29, 31, 1);
  width: 95%;
  padding: 8px 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.checkbox-container {
  display: flex;
  align-items: center;
  height: 27px;
  margin-top: 8px;
  margin-bottom: 2px;
}

.checkbox {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.tags-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
}

.tag-small {
  padding: 8px 12px;
  border-radius: 100px;
  border: 1px rgba(83, 83, 92, 1);;
  background: rgba(29, 29, 31, 1);
  margin-right: 10px;
  margin-bottom: 12px;
  margin-top: 4px;
  font-size: 16px;
}

.download-container {
  display: flex;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid rgba(162, 219, 153, 1);
  padding: 8px;
  margin-top: 13px;
  border-color: rgba(166, 243, 153, 1);
  background: rgba(29, 29, 31, 1);
}

.account-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  width: 556px;
  background: rgba(18, 18, 18, 1);
  padding: 24px 16px;
  margin-bottom: 24px;
}

.account-management {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-account {
  color: rgba(224, 121, 121, 1);
  font-size: 16px;
  font-weight: 400;
}

.cancel {
  width: 95%;
  height: 33px;
  border-radius: 2px;
  background: rgba(174, 198, 255, 1);
  padding: 8px 12px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  color: rgba(24, 24, 26, 1);
  font-weight: bold;
  font-size: 16px;
  margin: 28px 0 28px 0;
}

/* background: rgba(166, 243, 153, 1); */


 .modal {
  display: block;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .5)
}

.modal-container {
  position: relative;
  width: 296px;
  background: rgba(18, 18, 18, 1);
  width: 20%;
  margin: auto;
  margin-top: 150px;
  padding: 24px;
}

.password-input {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.delete-account-modal {
  margin-top: 10px;
  color: rgba(224, 121, 121, 1);
  padding: 30px 0;
  border-top: 1px solid rgba(83, 83, 92, 1);
  margin-bottom: 5px;
}

.modal-close {
  position: absolute;
  top: 8px;
  right: 14px;
  font-size: 30px;
  color: white;
  opacity: .5;
  font-weight: 700;
  border: none;
  background-color: transparent;
  cursor: pointer
}
</style>