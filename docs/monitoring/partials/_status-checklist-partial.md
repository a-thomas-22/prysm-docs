import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className='hide-tabs'>
    <div className='checklist'>
        <div className='task'>
            <div className='input-container'><input id="tc-1" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="tc-1">1. Select a configuration above</label>
                <p>If you end up generating a troubleshooting report, your report will include your selected configuration.</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="tc-2" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="tc-2">2. Check Quickstart Configurations</label>
                <p>Many common issues are resolved by the steps in our <a target="_blank" href='../install/install-with-script'>Quickstart guide</a>. We recommend reviewing the quickstart guide before continuing below.</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-1" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-1">3. Execution node sync status</label>
                <Tabs groupId="execution-clients" defaultValue="geth" values={[
                {label: 'Execution client:', value: 'label'},
                {label: 'Nethermind', value: 'nethermind'},
                {label: 'Besu', value: 'besu'},
                {label: 'Geth', value: 'geth'}
                ]}>
                <TabItem value="nethermind">
                    <p>You can <a href='https://docs.nethermind.io/nethermind/ethereum-client/monitoring-node-health'>check your Nethermind execution node's sync status</a> by navigating to <a href='http://localhost:8545/healthchecks-ui'><code>http://localhost:8545/healthchecks-ui</code></a> or by running <code>curl localhost:8545/health</code> from a separate terminal window. A sync status of <code>false</code> indicates that your node is fully synced. </p>
                </TabItem>
                <TabItem value="besu">
                    <Tabs className="tabgroup-with-label" groupId="os" defaultValue="others" values={[
                        {label: 'Operating system:', value: 'label'},
                        {label: 'Linux, MacOS, Arm64', value: 'others'},
                        {label: 'Windows', value: 'win'}
                        ]}>
                        <TabItem className="unclickable-element" value="label"></TabItem>
                        <TabItem value="others"><p>You can <a href='https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_syncing'>check your Besu execution node's sync status</a> by running <code>curl -H 'Content-Type: application/json' -X POST http://localhost:8545 -d '&#123;"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":51&#125;'</code> from a separate terminal window. A sync status of <code>false</code> indicates that your node is fully synced.</p></TabItem>
                        <TabItem value="win"><p>You can <a href='https://besu.hyperledger.org/en/stable/Reference/API-Methods/#eth_syncing'>check your Besu execution node's sync status</a> by running <code>curl -H "Content-Type: application/json" -X POST http://localhost:8545 -d "&#123;""jsonrpc"":""2.0"",""method"":""eth_syncing"",""params"":[],""id"":51&#125;"</code> from a separate terminal window. A sync status of <code>false</code> indicates that your node is fully synced.</p></TabItem>
                    </Tabs>
                </TabItem>
                <TabItem value="geth">
                    <Tabs className="tabgroup-with-label" groupId="os" defaultValue="others" values={[
                        {label: 'Operating system:', value: 'label'},
                        {label: 'Linux, MacOS, Arm64', value: 'others'},
                        {label: 'Windows', value: 'win'}
                        ]}>
                        <TabItem className="unclickable-element" value="label"></TabItem>
                        <TabItem value="others"><p>You can check your Geth execution node's sync status by running <code>geth attach</code> (IPC) or <code>geth attach http://localhost:8545</code> (HTTP) from a separate terminal. Then type <code>eth.syncing</code>. A sync status of <code>false</code> indicates that your node is fully synced.</p></TabItem>
                        <TabItem value="win"><p>You can check your Geth execution node's sync status by running <code>geth attach ipc:\\.\pipe\geth.ipc</code> (IPC) or <code>geth attach http://localhost:8545</code> (HTTP) from a separate terminal. Then type <code>eth.syncing</code>. A sync status of <code>false</code> indicates that your node is fully synced.</p></TabItem>
                    </Tabs>
                </TabItem>
                </Tabs>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-2" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-2">4. Execution node peer connectivity</label>
                <Tabs groupId="execution-clients" defaultValue="geth" values={[
                    {label: 'Execution client:', value: 'label'},
                    {label: 'Nethermind', value: 'nethermind'},
                    {label: 'Besu', value: 'besu'},
                    {label: 'Geth', value: 'geth'}
                    ]}>
                    <TabItem value="nethermind">
                    <p>You can <a href='https://docs.nethermind.io/nethermind/ethereum-client/monitoring-node-health'>check your Nethermind execution node's peer connectivity</a> by navigating to <a href='http://localhost:8545/healthchecks-ui'><code>http://localhost:8545/healthchecks-ui</code></a> or by running <code>curl localhost:8545/health</code> a separate terminal window. A health status of <code>Healthy</code> indicates that your node is connected to peers.</p>
                    </TabItem>
                    <TabItem value="besu">
                    <p>You should periodically see more than a few peers reported through Besu's log output. Refer to Besu's <a href='https://besu.hyperledger.org/en/stable/public-networks/how-to/connect/manage-peers/#monitor-peer-connections'>Monitor peer connections</a> documentation for more detailed peer health monitoring guidance.</p>
                    </TabItem>
                    <TabItem value="geth">
                    <p>You should periodically see more than a few peers reported through Geth's log output. Look for output in the format of <code>peercount=12</code>. Refer to Geth's <a href='https://geth.ethereum.org/docs/interface/peer-to-peer'>Connecting To The Network</a> documentation for more detailed peer health monitoring guidance.</p>
                    </TabItem>
                </Tabs>
            </div>
        </div>
            <div className='task'>
            <div className='input-container'><input id="st-3" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-3">5. Execution node version</label>
                <Tabs className="tabgroup-with-label" groupId="execution-clients" defaultValue="geth" values={[
                    {label: 'Execution client:', value: 'label'},
                    {label: 'Geth', value: 'geth'},
                    {label: 'Nethermind', value: 'nethermind'},
                    {label: 'Besu', value: 'besu'}
                    ]}>
                    <TabItem value="geth">Use <code>geth version</code> to check Geth's version. See <a href='https://github.com/ethereum/go-ethereum/releases'>Geth's releases page</a> and join <a href='https://discord.gg/invite/nthXNEv'>their Discord</a> to stay up to date as we approach Mainnet Merge.</TabItem>
                    <TabItem value="nethermind">Review Nethermind's log output to see what version you're using. See <a href='https://github.com/NethermindEth/nethermind/releases'>Nethermind's releases page</a> and join <a href='https://discord.com/invite/DedCdvDaNm'>their Discord</a> to stay up to date as we approach Mainnet Merge.</TabItem>
                    <TabItem value="besu">Review Besu's log output to see what version you're using. See Besu's <a href='https://github.com/hyperledger/besu/releases'>releases page</a> and join <a href='https://discord.com/invite/hyperledger'>their Discord</a> to stay up to date as we approach Mainnet Merge.</TabItem>
                </Tabs>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-4" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-4">6. Beacon node sync status</label>
                <p>You can check your beacon node's <a href='https://ethereum.github.io/beacon-APIs/?urls.primaryName=dev#/Node/getSyncingStatus'>sync status</a> by running <code>curl http://localhost:3500/eth/v1/node/syncing | jq</code> from a separate terminal window. When you see <code>"is_syncing":false</code>, your beacon node is fully synchronized with the beacon chain. When you see <code>"is_optimistic":false</code>, your beacon node sees that your execution node is either 1) not yet started, 2) hasn't synced past the merge block or 3) fully synchronized with the execution-layer blockchain.
                </p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-5" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-5">7. Beacon node peer connectivity</label>
                <p>You should periodically see more than a few peers reported through your beacon node's log output. Look for output in the format of <code>peers=12</code>. You can issue <code>curl http://localhost:8080/healthz</code> from a separate terminal window to check connectivity status. If you see <code>currentConnectionError: no contract code at given address</code>, your execution node may still be syncing. Otherwise, if you don't see any errors, your beacon node is connected to peers.</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-6" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-6">8. Beacon node version</label>
                <p>Ensure that you're using the <a href='https://github.com/prysmaticlabs/prysm/releases'>latest stable Prysm release</a>. Check Prysm's version by issuing the following command: <code>prysm.sh beacon-chain --version</code> (Linux) <code>prysm.bat beacon-chain --version</code> (Windows).</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-7" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-7">9. Beacon node ↔ execution node connectivity</label>
                <p>In a separate terminal window, run <code>curl http://localhost:3500/eth/v1/node/syncing</code>. 
                If the response shows `"el_offline": false`, it can be interpreted as the "EN-BN connection is healthy". However, if you see `"is_optimistic": true`, it may indicate that the execution node is still syncing or experiencing other issues. For more information about this endpoint, visit <a href='https://ethereum.github.io/beacon-APIs/?urls.primaryName=dev#/Node/getSyncingStatus'>the beacon API documentation</a>.</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-8" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-8">10. Fee recipient configuration</label>
                <p>Prysm will output an error if you attempt to provide an invalid Ethereum wallet address as a fee recipient address. You'll see warnings if a fee recipient address hasn't been provided. See <a href='../execution-node/fee-recipient'>Configure Fee Recipient</a> for more information.</p>
            </div>
        </div>
        <div className='task'>
            <div className='input-container'><input id="st-9" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-9">11. Validator status</label>
                <Tabs className="tabgroup-with-label" groupId="network" defaultValue="mainnet" values={[
                        {label: 'Network:', value: 'label'},
                        {label: 'Mainnet', value: 'mainnet'},
                        {label: 'Holesky', value: 'holesky'},
                        {label: 'Sepolia', value: 'sepolia'}
                    ]}>
                    <TabItem value="mainnet">Paste your validator's public key (available in your <code>deposit_data-*.json</code> file) into a <a href='https://beaconcha.in'>blockchain explorer like beaconcha.in</a> to check the status of your validator.</TabItem>
                    <TabItem value="holesky">Paste your validator's public key (available in your <code>deposit_data-*.json</code> file) into a <a href='https://holesky.beaconcha.in/'>blockchain explorer like beaconcha.in</a> to check the status of your validator.</TabItem>
                    <TabItem value="sepolia">Running a validator on Sepolia is currently unsupported as Sepolia is a permissioned network, so there's nothing to do here.</TabItem>
                </Tabs>
            </div>
        </div>
        <div className='task hidden-in-status-guide'>
            <div className='input-container'><input id="st-10" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-10">12. Troubleshooting scenarios and solutions</label>
                <p>Running into unexpected output, warnings, or errors? Although this is unintuitive, <strong>many errors and warnings are expected</strong> and have been identified in the below list of troubleshooting scenarios and solutions. We gratefully ask that you review this before asking for support.</p>
            </div>
        </div>
        <div className='task hidden-in-status-guide'>
            <div className='input-container'><input id="st-11" type='checkbox'/><span className='done'></span></div>
            <div className='guidance-container'>
                <label htmlFor="st-11">13. Troubleshooting report</label>
                <p>Issue still not resolved? <a href='#generate-troubleshooting-report'>Generate a troubleshooting report below</a>. Head over to <a href='https://discord.gg/prysmaticlabs'>Discord</a> and paste your report for additional troubleshooting assistance.</p>
            </div>
        </div>
    </div>
</div>