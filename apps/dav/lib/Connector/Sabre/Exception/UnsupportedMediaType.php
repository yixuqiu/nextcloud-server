<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OCA\DAV\Connector\Sabre\Exception;

/**
 * Unsupported Media Type
 *
 * This exception is thrown whenever a user tries to upload a file which holds content which is not allowed
 *
 */
class UnsupportedMediaType extends \Sabre\DAV\Exception {

	/**
	 * Returns the HTTP status code for this exception
	 *
	 * @return int
	 */
	public function getHTTPCode() {
		return 415;
	}
}
