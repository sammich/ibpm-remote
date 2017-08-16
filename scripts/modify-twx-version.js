/*
const fs = require('fs'),
    path = require('path'),
    archiver = require('archiver')

// update to the name of the file you want to modify
const twxFileName = 'Remote - 1.2.3.twx',
    twxPath = path.join(__dirname, twxFileName),
    archiveExtractDir = ''

// open the file and write it to a temp dir
archiver.open(twxPath)

const packageManifestPath = path.join(archiveExtractDir, 'META-INF', 'package.xml'),
    packageContents = fs.readSync(packageManifestPath),
    parts = packageContents.split('\n')

parts[1] = parts[1].replace(/buildVersion="([\d|\.]+)"/, 'buildVersion="8.0"')

const modifiedPackageContents = parts.join('\n')

fs.writeFileSync(packageManifestPath, modifiedPackageContents)
*/

// zip it all up again*/

/*const fs = require('fs'),
    path = require('path')

const packageManifestPath = path.join('../', 'resources', 'package.xml'),
    packageContents = fs.readFileSync(packageManifestPath, 'utf-8'),
    parts = packageContents.split('\n')

parts[1] = parts[1].replace(/buildVersion="([\d|\.]+)"/, 'buildVersion="8.0"')

const modifiedPackageContents = parts.join('\n')

fs.writeFileSync(packageManifestPath, modifiedPackageContents)*/
