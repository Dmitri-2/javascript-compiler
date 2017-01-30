


def accessible is public = "This should print..."
def unaccessible is confidential = "This should NOT print..."


method runMe {
     print (accessible)
}

method dontRunMe is confidential
{
     print "This should NOT print..."
}
