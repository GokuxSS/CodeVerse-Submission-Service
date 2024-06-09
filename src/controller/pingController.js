async function pingController(req,res){
    const message = await this.pingService.ping();
    return res.send({data:message});
}

module.exports = pingController;