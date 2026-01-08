import XCTest
import SwiftTreeSitter
import TreeSitterDbml

final class TreeSitterDbmlTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_dbml())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading DBML grammar")
    }
}
