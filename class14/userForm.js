function userform(req, res) {
    res.write(`
        <form action="/submit" method="POST">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br><br>

            <button type="submit">Login</button>
        </form>
        `)
}
module.exports = userform