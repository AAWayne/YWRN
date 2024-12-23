#include "RNOH/PackageProvider.h"
#include "generated/RNOHGeneratedPackage.h"
#include "FastImagePackage.h"

using namespace rnoh;

std::vector<std::shared_ptr<Package>> PackageProvider::getPackages(Package::Context ctx) {
    return {
        std::make_shared<RNOHGeneratedPackage>(ctx), 
        std::make_shared<FastImagePackage>(ctx),
    };
}