const fs = require('fs'),
    path = require('path')

class UserManager {
    constructor() {
        this.users = new Map()

        // default user - usually admin
        const adminUser = process.env.BPM_ADMIN_USER || 'admin'

        this.add(
            adminUser,
            process.env.BPM_ADMIN_PASS || 'admin'
        )

        this.activate(adminUser)

        this.__readUserConf()
    }

    __readUserConf() {
        const home = process.cwd(),

            /*
            users.json must be in the format
            {
                users: {
                    "username": "password"
                }
            }

            may consider groups later
             */
            userConfPath = path.join(home, 'users.json')

        if (!fs.existsSync(userConfPath)) {
            return
        }
        let userConf
        try {
            userConf = JSON.parse(fs.readFileSync(userConfPath))
        } catch (err) {
            console.error('Attempted to read from users.conf file', err)
            throw err
        }

        // read users
        Object.keys(userConf.users).forEach(username => {
            this.add(username, userConf.users[username])
        })
    }

    add(user, pass) {
        if (this.users.has(user)) {
            return console.warn(`User already added: ${user}`)
        }

        this.users.set(user, pass)
    }

    get current() {
        return this.currentUser
    }

    switch(username) {
        this.activate(username)
    }

    activate(username) {
        if (!this.users.has(username)) {
            return console.warn(`Could not activate user. User not found: ${username}`)
        }

        this.currentUser = {
            username: username,
            password: this.users.get(username)
        }
    }
}

module.exports = new UserManager()
