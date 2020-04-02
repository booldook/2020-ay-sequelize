module.exports = (sequelize, Sequelize) => {
	return sequelize.define('Notice', {
		title: {
			type: Sequelize.STRING(255)
		},
		writer: {
			type: Sequelize.STRING(50)
		},
		content: {
			type: Sequelize.TEXT()
		}
	}, {
		timestamps: true,
		charset: 'utf8'
	})
}