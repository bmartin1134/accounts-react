/* globals Meteor: true */
import { Accounts } from 'meteor/accounts-base'
import ARCreateAccount from './ARCreateAccount'
import AccountsReact from '../../AccountsReact'
// Create user
export const createUser = (newUser, callback) => {
  ARCreateAccount.call(newUser, callback)
}

// Login
export const login = (username, email, password, callback) => {
  Meteor.loginWithPassword(username || email, password, err => {
    callback(err)
    if (!err) {
      const { onLoginHook } = AccountsReact.config
      if (onLoginHook) {
        onLoginHook()
      }
    }
  })
}

// Forgot password
export const forgotPassword = (email, callback) => {
  Accounts.forgotPassword({ email }, callback)
}

// Change password
export const changePassword = (oldPassword, newPassword, callback) => {
  Accounts.changePassword(oldPassword, newPassword, callback)
}

// Reset password
export const resetPassword = (token, newPassword, callback) => {
  Accounts.resetPassword(token, newPassword, callback)
}